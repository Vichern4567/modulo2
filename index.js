//import express from 'express'
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/es', (req, res) => {
  res.send('Hola Mundo')
})


app.get('/ch', (req, res) => {
  res.send('你好，世界')
})


app.get('/ar', (req, res) => {
  res.send('مرحبا بالعالم')
})

app.get('/rs', (req, res) => {
  res.send('Привет, мир')
})

app.get('/jp', (req, res) => {
  res.send('こんにちは世界')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})