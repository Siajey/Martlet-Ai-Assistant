'use client'
import { useState, createContext, useContext } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  //custom modal controller state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  //User Creation Modal functionality
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // ProductCreationModalStage2 functionality
  const openSecondModal = () => {
    setIsSecondModalOpen(true)
  }

  const closeSecondModal = () => {
    setIsSecondModalOpen(false)
  }

  // ProductCreationModalStage3 functionality
  const openThirdModal = () => {
    setIsThirdModalOpen(true)
  }

  const closeThirdModal = () => {
    setIsThirdModalOpen(false)
  }

  //Level up modal functionality
  const LevelUpOpen = () => {
    setIsLevelUpModalOpen(true)
  }

  const LevelUpClose = () => {
    setIsLevelUpModalOpen(false)
  }

  // Pass an object containing all the values we need
  const contextValues = {
    isModalOpen,
    setIsModalOpen,
    isSecondModalOpen,
    setIsSecondModalOpen,
    isThirdModalOpen,
    setIsThirdModalOpen,
    isLevelUpModalOpen,
    setIsLevelUpModalOpen,
    openModal,
    closeModal,
    openSecondModal,
    closeSecondModal,
    openThirdModal,
    closeThirdModal,
    LevelUpOpen,
    LevelUpClose,
  }
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
