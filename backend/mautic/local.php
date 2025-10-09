<?php
$parameters = array(
    'db_driver' => 'pdo_mysql',
    'db_host' => getenv('MAUTIC_DB_HOST'),
    'db_port' => 3306,
    'db_name' => getenv('MAUTIC_DB_NAME'),
    'db_user' => getenv('MAUTIC_DB_USER'),
    'db_password' => getenv('MAUTIC_DB_PASSWORD'),
    'db_table_prefix' => null,
    'db_backup_tables' => 1,
    'db_backup_prefix' => 'bak_',
    
    'site_url' => 'http://localhost:8080',
    'admin_email' => getenv('MAUTIC_ADMIN_EMAIL'),
    'admin_password' => getenv('MAUTIC_ADMIN_PASSWORD'),
    
    'mailer_from_name' => getenv('MAIL_FROM_NAME'),
    'mailer_from_email' => getenv('MAIL_FROM_EMAIL'),
    'mailer_transport' => getenv('MAIL_TRANSPORT'),
    'mailer_host' => getenv('MAIL_HOST'),
    'mailer_port' => getenv('MAIL_PORT'),
    'mailer_user' => getenv('MAIL_USER'),
    'mailer_password' => getenv('MAIL_PASSWORD'),
    
    'secret_key' => getenv('MAUTIC_SECRET_KEY'),
    
    'cache_path' => '/var/www/html/app/cache',
    'log_path' => '/var/www/html/app/logs',
    'tmp_path' => '/var/www/html/app/tmp',
    'theme' => 'blank',
    
    'image_path' => 'media/images',
    'upload_dir' => 'media/files',
    
    'api_enabled' => true,
    'api_enable_basic_auth' => true,
    
    'cookie_secure' => false,
    'cookie_path' => '/',
    'cookie_httponly' => true,
    
    'remember_me_lifetime' => 31536000,
    'remember_me_http_only' => true,
    
    'dev_hosts' => array(),
    'trusted_proxies' => array(),
    'trusted_hosts' => array()
);