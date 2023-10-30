const StatusDisplay = ({status}) => {

  // Let's create a function to set the color depending on the status (then we call it on the component rendering):
  const getColor = (status) => {
    let color = "bg-slate-700"
    switch (status.toLowerCase()){
      case "done":
        color = "bg-green-200"
        return color
      case "started":
        color = "bg-yellow-200"
        return color
      case "not started":
        color = "bg-red-200"
        return color
    }
    return color
  }
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
        {status}
    </span>
  )
}

export default StatusDisplay