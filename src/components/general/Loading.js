import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
  const color = "#ffffff"
  const loading = true;
  return (
    <span className="loading-span">
      <ClipLoader color={color} loading={loading} size={50} />
    </span>
  )
}

export default Loading