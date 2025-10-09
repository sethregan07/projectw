FROM php:8.1-apache

# Add contrib repository and install required PHP extensions and dependencies
RUN echo "deb http://deb.debian.org/debian trixie contrib" >> /etc/apt/sources.list \
    && apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    libc-client-dev \
    libkrb5-dev \
    libxml2-dev \
    libzip-dev \
    default-mysql-client \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-configure imap --with-kerberos --with-imap-ssl \
    && docker-php-ext-install -j$(nproc) \
    gd \
    pdo \
    pdo_mysql \
    intl \
    imap \
    zip \
    opcache

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set recommended PHP.ini settings
RUN { \
    echo 'memory_limit=512M'; \
    echo 'upload_max_filesize=128M'; \
    echo 'post_max_size=128M'; \
    echo 'max_execution_time=300'; \
    echo 'max_input_time=300'; \
} > /usr/local/etc/php/conf.d/recommended.ini

WORKDIR /var/www/html

# Configure Apache
RUN a2enmod rewrite

# Set permissions
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80

CMD ["apache2-foreground"]