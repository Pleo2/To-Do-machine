import React from "react"
import { AnimatePresence } from "framer-motion"
import './ListItems.css'
export const ListItems = (props) => {
  return (
    <section>
      <ul>
      <AnimatePresence>
        {props.children}
      </AnimatePresence>
      </ul>
    </section>
  )
}