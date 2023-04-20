export function sideBarItem(props){
    const {icon,text}=props;
    return (
        <div>
          <span>${icon}<span>${text}</span></span>
        </div>
    );
}