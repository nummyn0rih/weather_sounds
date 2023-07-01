import './index.css'
import { type Weather } from './interfaces'
import { ButtonImg } from './components/Button'
import weathers from './weathersList'
import pauseIcon from '../public/assets/icons/pause.svg'

const state: { currentTrackID: number, isPlaying: boolean } = {
  currentTrackID: 0,
  isPlaying: false
}

const app = document.querySelector('#app') as HTMLElement
const container = document.querySelector('#weathers') as HTMLDivElement
const audio = document.querySelector('#audio') as HTMLAudioElement
const volume = document.querySelector('#volume') as HTMLInputElement

volume.addEventListener('input', () => {
  audio.volume = parseFloat(volume.value)
})

const changeIcon = (id: number, status: 'pause' | 'play'): void => {
  const btn = document.querySelector(`#btn-${id}`) as HTMLButtonElement

  if (status === 'pause') {
    btn.innerHTML = pauseIcon
  } else if (status === 'play') {
    btn.innerHTML = weathers[id].icon
  }
}

const changeBg = (id: number): void => {
  const { bg } = weathers[id]

  app.style.backgroundImage = `url(${bg})`
}

const play = (id: number) => (): void => {
  const { currentTrackID, isPlaying } = state
  const weather: Weather = weathers[id]

  if (currentTrackID === id) {
    if (isPlaying) {
      audio.pause()
      state.isPlaying = false
      changeIcon(id, 'pause')
    } else {
      void audio.play()
      state.isPlaying = true
      changeIcon(id, 'play')
    }
  } else {
    if (currentTrackID !== 0) {
      changeIcon(currentTrackID, 'play')
    }
    state.currentTrackID = id
    state.isPlaying = true
    audio.src = weather.sound
    changeBg(id)
    void audio.play()
  }
}

const weathersList: Weather[] = []

const entries = Object.entries(weathers)
for (const [, value] of entries) {
  weathersList.push(value)
}

const buttonsList: HTMLButtonElement[] = weathersList.map((item) => {
  const newBtn = new ButtonImg(item)
  const btn = newBtn.buttonImg
  btn.addEventListener('click', play(item.id))
  return btn
})

container.append(...buttonsList)
