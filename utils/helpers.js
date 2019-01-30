import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const NOTIFICATION_KEY = 'Flashcards:notifications'

export function clearLocalNotifications () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(data => {
      console.log('clear', data)
      return Notifications.cancelAllScheduledNotificationsAsync()
    })
}

function createNotification () {
  return {
    title: 'Study a little bit!',
    body: '👋 don\'t forget to study your flashcards',
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  }
}

export async function setLocalNotification () {
  const data = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY))

  if (!data) {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)

    if (permission.status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync()

      const time = new Date()
      time.setHours(13)
      time.setMinutes(0)

      console.log('time', time)

      Notifications.scheduleLocalNotificationAsync(
        createNotification(),
        {
          time: time,
          repeat: 'day',
        }
      )

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
    }
  }
}
