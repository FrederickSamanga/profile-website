// pages/index.js
import TaskList from '../components/TaskList'
import keycloak from '../utils/keycloak'

export default function Home() {
  if (!keycloak.authenticated) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <TaskList />
    </div>
  )
}