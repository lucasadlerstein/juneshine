import React, { useState} from 'react'
import { SiteContext } from '../context'

export const SiteProvider = ({ children }) => {
  let initialSiteState = {
    showQuiz: false
  }

  const [site, updateSite] = useState(initialSiteState)



  return (
    <SiteContext.Provider
      value={{
        site,
        toggleQuiz: (e, value) => {
          e.preventDefault();
          updateSite(prevState => {
            return {...prevState, showQuiz: !value}
          })
        }
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}