Use the Cloud Formation plugin to update/create a cloud formation object. The following parameters are used to configure this plugin:

* **access_key** - amazon key (optional)
* **secret_key** - amazon secret key (optional)
* **region** - deploy region (`us-east-1`, `eu-west-1`, etc)
* **source** - source location of the files, using a glob matching pattern

The following is a sample cloud-formation configuration in your .drone.yml file:

```yaml
publish:
  josmo/blair-cloud-formation:
    region: "us-west-2"
    access_key: "970d28f4dd477bc184fbd10b376de753"
    secret_key: "9c5785d3ece6a9cdefa42eb99b58986f9095ff1c"
    source: templates/**/*
```