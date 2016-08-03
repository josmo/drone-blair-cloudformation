# drone-blair-cloudformation


Drone plugin to publish cloud formation templates to AWS. For the usage information and a listing of the available options please take a look at [the docs](DOCS.md).

## Build

Build the binary with the following commands:

```
npm install
```

## Docker

Build the docker image with the following commands:

```
docker build --rm=true -t josmo/drone-blair-cloudformation .
```

## Usage

Build and publish from your current working directory:

```
docker run --rm                     \
  -e PLUGIN_SOURCE=<source>         \
  -e PLUGIN_REGION=<region>         \
  -e PLUGIN_ACCESS_KEY=<token>      \
  -e PLUGIN_SECRET_KEY=<secret> \
  -v $(pwd):$(pwd)                  \
  -w $(pwd)                         \
  josmo/drone-blair-cloudformation
```
