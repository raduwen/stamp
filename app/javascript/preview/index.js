function getRandomPos(max) {
  return `${Math.floor(Math.random() * Math.floor(max))}px`;
}

class Preview {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.width = data.width
    this.height = data.height
  }

  show() {
    this.body = document.getElementById('preview')

    if (this.body) {
      const wrapper = document.createElement('div')
      const img = document.createElement('img')
      img.src = this.url

      img.addEventListener('animationend', () => {
        this.body.removeChild(wrapper)
      });

      wrapper.style.position = 'fixed'
      wrapper.style.top = getRandomPos(window.innerHeight - this.width)
      wrapper.style.left = getRandomPos(window.innerWidth - this.height)

      wrapper.appendChild(img)
      this.body.appendChild(wrapper)
    }
  }
}

export default Preview
