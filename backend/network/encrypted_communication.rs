use std::collections::HashMap;
use ed25519_dalek::{Keypair, PublicKey, SecretKey, Signature};
use x25519_dalek::{EphemeralSecret, PublicKey as X25519PublicKey};
use sha3::{Sha3_256, Digest};
use rand::rngs::OsRng;
use aes_gcm::{
    Aes256Gcm, 
    Key, 
    Nonce
};
use aes_gcm::aead::{Aead, NewAead};

// End-to-End Encrypted Communication
// Inspired by privacy-preserving communication principles

#[derive(Clone, Debug)]
struct EncryptedMessage {
    sender: PublicKey,
    recipient: PublicKey,
    ciphertext: Vec<u8>,
    nonce: Vec<u8>,
    ephemeral_public_key: X25519PublicKey,
}

struct SecureCommunicationNode {
    signing_keypair: Keypair,
    encryption_keypair: X25519PublicKey,
    message_history: HashMap<PublicKey, Vec<EncryptedMessage>>,
    trusted_peers: HashMap<PublicKey, bool>,
}

impl SecureCommunicationNode {
    // Create a new secure communication node
    fn new() -> Self {
        let mut csprng = OsRng;
        let signing_keypair: Keypair = Keypair::generate(&mut csprng);
        
        // Generate X25519 key for encryption
        let encryption_secret = EphemeralSecret::new(&mut csprng);
        let encryption_public = X25519PublicKey::from(&encryption_secret);

        SecureCommunicationNode {
            signing_keypair,
            encryption_keypair: encryption_public,
            message_history: HashMap::new(),
            trusted_peers: HashMap::new(),
        }
    }

    // Encrypt a message for a specific recipient
    fn encrypt_message(
        &self, 
        recipient_public_key: &X25519PublicKey, 
        message: &[u8]
    ) -> EncryptedMessage {
        let mut csprng = OsRng;
        
        // Generate ephemeral key for this transmission
        let ephemeral_secret = EphemeralSecret::new(&mut csprng);
        let ephemeral_public = X25519PublicKey::from(&ephemeral_secret);
        
        // Perform key exchange
        let shared_secret = ephemeral_secret.diffie_hellman(recipient_public_key);
        
        // Derive encryption key
        let mut hasher = Sha3_256::new();
        hasher.update(shared_secret.as_bytes());
        let derived_key = hasher.finalize();
        
        // Use AES-GCM for encryption
        let key = Key::from_slice(&derived_key);
        let cipher = Aes256Gcm::new(key);
        
        // Generate unique nonce
        let nonce = Nonce::from_slice(&shared_secret.as_bytes()[..12]);
        
        // Encrypt the message
        let ciphertext = cipher.encrypt(nonce, message)
            .expect("Encryption failed");
        
        EncryptedMessage {
            sender: self.signing_keypair.public,
            recipient: recipient_public_key.to_bytes(),
            ciphertext,
            nonce: nonce.to_vec(),
            ephemeral_public_key: ephemeral_public,
        }
    }

    // Decrypt a received message
    fn decrypt_message(
        &self, 
        encrypted_message: &EncryptedMessage
    ) -> Option<Vec<u8>> {
        // Verify sender is trusted
        if !self.is_trusted_peer(&encrypted_message.sender) {
            return None;
        }

        // Perform key exchange using our secret key
        let mut csprng = OsRng;
        let our_secret = EphemeralSecret::new(&mut csprng);
        
        let shared_secret = our_secret.diffie_hellman(&encrypted_message.ephemeral_public_key);
        
        // Derive decryption key
        let mut hasher = Sha3_256::new();
        hasher.update(shared_secret.as_bytes());
        let derived_key = hasher.finalize();
        
        // Use AES-GCM for decryption
        let key = Key::from_slice(&derived_key);
        let cipher = Aes256Gcm::new(key);
        
        // Use the nonce from the original message
        let nonce = Nonce::from_slice(&encrypted_message.nonce);
        
        // Attempt decryption
        cipher.decrypt(nonce, encrypted_message.ciphertext.as_ref())
            .ok()
    }

    // Add a peer to trusted list
    fn add_trusted_peer(&mut self, peer_public_key: PublicKey) {
        // In a real system, this would involve more complex verification
        self.trusted_peers.insert(peer_public_key, true);
    }

    // Check if a peer is trusted
    fn is_trusted_peer(&self, peer_public_key: PublicKey) -> bool {
        self.trusted_peers.get(&peer_public_key).cloned().unwrap_or(false)
    }

    // Send a secure message
    fn send_secure_message(
        &mut self, 
        recipient_public_key: &X25519PublicKey, 
        message: &[u8]
    ) -> Option<EncryptedMessage> {
        // Encrypt and store message
        let encrypted_msg = self.encrypt_message(recipient_public_key, message);
        
        // Store in message history
        self.message_history
            .entry(encrypted_msg.recipient.into())
            .or_insert_with(Vec::new)
            .push(encrypted_msg.clone());
        
        Some(encrypted_msg)
    }
}

fn main() {
    // Example usage
    let mut alice = SecureCommunicationNode::new();
    let mut bob = SecureCommunicationNode::new();

    // Add each other as trusted peers
    alice.add_trusted_peer(bob.signing_keypair.public);
    bob.add_trusted_peer(alice.signing_keypair.public);

    // Send a secret message
    let secret_message = b"Hello, this is a top-secret message!";
    
    if let Some(encrypted_msg) = alice.send_secure_message(
        &bob.encryption_keypair, 
        secret_message
    ) {
        // Bob decrypts the message
        let decrypted_msg = bob.decrypt_message(&encrypted_msg);
        
        println!("Decrypted message: {:?}", 
            decrypted_msg.map(|m| String::from_utf8_lossy(&m).to_string())
        );
    }
}