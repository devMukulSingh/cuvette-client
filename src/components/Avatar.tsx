
type Props = {
    letter:string | undefined
}

const Avatar = ({
    letter
}:Props) => {
  return (
    <div className='rounded-full size-8 font-bold  border flex items-center justify-center bg-blue-500 text-white'>
        {letter}
    </div>
  )
}

export default Avatar