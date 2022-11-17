import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react'

const SHOPPING_SHEET = {
  cardName: '',
  cardNumber: '',
  cardDate: '',
  cardCode: '',
  totlaPrice: '',
}

const SheetContext = createContext()
const SheetDispatchContext = createContext()
const ConfirmedContext = createContext()

export function SheetProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, SHOPPING_SHEET)
  const [confirmed, setConfirmed] = useState(false)

  function handleOnConfirmed() {
    setConfirmed(true)
  }

  useEffect(() => {
    if (confirmed) {
      console.log(tasks)
      setConfirmed(false)
    }
  }, [confirmed, tasks])

  return (
    <SheetContext.Provider value={tasks}>
      <SheetDispatchContext.Provider value={dispatch}>
        <ConfirmedContext.Provider value={handleOnConfirmed}>
          {children}
        </ConfirmedContext.Provider>
      </SheetDispatchContext.Provider>
    </SheetContext.Provider>
  )
}

export function useSheet() {
  return useContext(SheetContext)
}
export function useSheetDispatch() {
  return useContext(SheetDispatchContext)
}
export function useConfirmed() {
  return useContext(ConfirmedContext)
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'editCardName': {
      return { ...tasks, cardName: action.value }
    }
    case 'editCardNumber': {
      return { ...tasks, cardNumber: action.value }
    }
    case 'editCardDate': {
      return { ...tasks, cardDate: action.value }
    }
    case 'editCardCode': {
      return { ...tasks, cardCode: action.value }
    }
    case 'sumTotalPrice': {
      return { ...tasks, totlaPrice: action.value }
    }
    default: {
      console.error('something wrong!')
    }
  }
}
