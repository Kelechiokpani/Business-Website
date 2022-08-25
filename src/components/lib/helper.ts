import moment from 'moment'
import axios from 'axios'

export const addTimeToCurrentDate = (time: string): Date => {
  if (!time) return new Date()
  const currentDate = moment()
  const timeMoment = moment(time, 'HH:mm:ss')
  const hours = timeMoment.hours()
  const minutes = timeMoment.minutes()
  const seconds = timeMoment.seconds()

  return currentDate.set({ hours, minutes, seconds }).toDate()
}

export const formatDate = (date: Date): string => {
  return moment(date).format('Do MMM YYYY, h:mm A')
}

export const axiosFileUpload = (
  file: any,
  url: string,
  onUploadProgress: (progressEvent: any) => void,
  body?: { [key: string]: string }
) => {
  const config = {
    withCredentials: true,
    onUploadProgress: function (progressEvent: { loaded: number; total: number }) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      onUploadProgress(percentCompleted)
    }
  }

  const data = new FormData()
  data.append('media', file)

  if (body) {
    ;(Object.keys(body) as Array<keyof typeof body>).forEach(key => {
      if (typeof key === 'string') {
        data.append(key, body[key])
      }
    })
  }

  return axios.post(url, data, config)
}
