#!bin/bash
read -p "This script will update the site (you will note lose the contents), are you sure (Y/n) ? "
echo    # (optional) move to a new line
if [[ $REPLY =~ ^(Y|y|Yes|yes|)$ ]]
then
    name=/var/www/html_old
    if [[ -e $name || -L $name ]] ; then
        i=1
        while [[ -e $name-$i || -L $name-$i ]] ; do
            let i++
        done
        name=$name-$i
    fi
    sudo mkdir "$name"
    echo "Updating the site and moving old contents to directory at $name..."
    sudo cp -r /var/www/html/* $name/
    echo "Removing content from /var/www/html folder..."
    sudo rm -rf /var/www/html/*
    sudo cp -r build/* /var/www/html/
    echo "Creating .htaccess file for apache to use"
    sudo touch /var/www/html/.htaccess

    > /var/www/html/.htaccess # truncate the file
    sudo echo "RewriteEngine On" >> /var/www/html/.htaccess
    sudo echo "RewriteBase /" >> /var/www/html/.htaccess 
    sudo echo "RewriteCond %{REQUEST_FILENAME} !-f" >> /var/www/html/.htaccess
    sudo echo "RewriteCond %{REQUEST_FILENAME} !-d" >> /var/www/html/.htaccess
    sudo echo "RewriteCond %{REQUEST_FILENAME} !-l" >> /var/www/html/.htaccess
    sudo echo "RewriteRule ^.*$ / [L,QSA]" >> /var/www/html/.htaccess

    echo "Okay, done"

fi


