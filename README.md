<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to use

### Excel file

#### POST to /api/excel/render

```
{
  "data": [<DATA>],
  "filename": "filename",
  "type": "xlsx"
}
```

### Template

#### POST to /api/templates/:templateId/render

```
{
  "data": <DATA>,
  "filename": "filename",
  "format": "pdf"
}
```