import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
})

globalStyle('ul, ol', {
  listStyle: 'none',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('button', {
  border: 0,
  background: 'none',
  cursor: 'pointer',
  outline: 'none',
})

globalStyle('input', {
  border: 0,
  outline: 'none',
  background: 'none',
})
