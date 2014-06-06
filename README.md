# grunt-config-crypter

> A Grunt Plugin for encrypting credentials in config files. Develop your app, create your configs. Then add your credentials and encrypt them. Push you changes, let them decrypt by your ci before you push the code to your server

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-config-crypter --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-config-crypter');
```

## The "config_crypter" task

### Overview

#### Gruntfile Code
In your project's Gruntfile, add a section named `config_crypter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
   config_crypter: {
      conf_config: {
        configs: [
          'tmp/test/fixtures/conf.json' 
        ]
      },
      mail_config: {
        configs: [
          'tmp/test/fixtures/mail.php' 
        ]
      },
      vhost_config: {
        configs: [
          'tmp/test/fixtures/vhost'
        ]
      }
    },
});
```

#### Configfile Code changes:
To encrypt your credentials just add a decrypted(<your_credential>) for each of your credentials in a config file.


#### Encrypt 
```shell
config_crypter:conf_config:encrypt:pass1337
```

#### Decrypt
```shell
config_crypter:conf_config:decrypt:pass1337
````

#### To plainify a encrypted config via your CI:
```shell
config_crypter:conf_config:plain:pass1337
````


#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  config_crypter: {
   configs: [
      'application/config/mail.php' 
    ]
  },
});
```




## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
### 0.0.3
- Main functionality is stable
