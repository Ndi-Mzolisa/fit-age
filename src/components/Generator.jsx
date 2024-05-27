import React, {useState} from 'react'
import SectionWrapper from "./SectionWrapper"
import { SCHEMES, WORKOUTS } from "../utils/exercise-db.js"
import Button from "./Button"

function Header(props) {
  const { index, title, description } = props
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const { pain, setPain, muscles, setMuscles, goal, setGoal, updateWorkout } = props

  const [showModal, setShowModal] = useState(false)
  

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if(muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if(muscles.length > 2) {
      return
    }

    if(pain !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if(muscles.length === 2) {
      setShowModal(false)
    }

  }

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Swole', 'o\'clock on the dot', '.']} >
      <Header index={'01'} title={'Pick your preference'} description={'Pick your workout and start gaining'} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setPain(type)
            }} className={"bg-slate-950 border duration-300 px-4 hover:border-red-600 py-3 rounded-lg " + (type === pain ? ' border-red-600' : ' border-red-400')} key={typeIndex}>
              <p className="capitalize">{type.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Isolate & annhilate'} description={'Choose the muscles to target and annhilate'} />
      <div className="bg-slate-950 border border-solid border-red-400 rounded-lg flex flex-col">
        <button onClick={toggleModal} className="relative p-3 flex items-center justify-center">
          <p className="capitalize">{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
          <i className="fa-sharp fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col p-3">
            {(pain === 'individual' ? WORKOUTS[pain] : Object.keys(WORKOUTS[pain])).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button key={muscleGroupIndex} className={"hover:text-red-400 duration-300" + (muscles.includes(muscleGroup) ? ' text-red-400' : ' ')} onClick={() => {
                  updateMuscles(muscleGroup)
                }}>
                  <p className="uppercase">{muscleGroup.replaceAll('_', " ")}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <Header index={'03'} title={'Get Jacked _ Get Rugged!'} description={'Select your desired physical gains'} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoal(scheme)
            }} className={"bg-slate-950 border duration-300 hover:border-red-600 py-3 rounded-lg px-4 " + (scheme === goal ? ' border-red-600' : ' border-red-400')} key={schemeIndex}>
              <p className="capitalize">{scheme.replaceAll('_', " ")}</p>
            </button>
          )
        })}
      </div>
      <Button  func={updateWorkout} text={"Generate Workout"}></Button>
    </SectionWrapper>
  )
}
