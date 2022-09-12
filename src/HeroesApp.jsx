import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (

    // seguridad de login y logout gracias a AuthContext.jsx y AuthProvider.jsx
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>

    // <>
    //     <AppRouter/>
    // </>
  )
}

// context y reducer https://www.udemy.com/course/react-cero-experto/learn/lecture/19965058#questions