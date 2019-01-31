import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export const NOTIFICATION_KEY = 'Flashcards:notifications'

export function clearLocalNotifications () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(data => {
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
      time.setDate(time.getDate() + 1)
      time.setHours(19)
      time.setMinutes(10)

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
