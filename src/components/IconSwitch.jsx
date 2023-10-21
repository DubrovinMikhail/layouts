export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className='switch-icon'>
      <span className="material-symbols-outlined icon" onClick={()=>onSwitch()}>
        {icon}
        </span>
    </div>
  )
};
