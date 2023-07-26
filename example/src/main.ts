const clickCallback = (evt: Event) => {
  evt.preventDefault()
}

function mount() {
  const container = document.querySelector('#app')

  if (!container) {
    return
  }
  container.innerHTML = 'hello world!'

  container.removeEventListener('click', clickCallback)
  container.addEventListener('click', clickCallback)
}

mount()
