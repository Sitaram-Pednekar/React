
import { UseModeContext } from "../Context/contextAPI";




function ButtonClick(){
    const {theme,darkMode,lightMode} = UseModeContext();

    const ButtonClickedMode=(e)=>{
        console.log(e)
        const isChecked=e.target.checked;
        console.log(isChecked)

        if(!isChecked){
            lightMode();
        }else {
            darkMode()
        }
        
    }
    

    return(
        <>
            <div>
                <input type="checkbox" onChange={ButtonClickedMode} name="CheckBox" />{(theme)==='light'?'Dark':'Light'}
            </div>
        </>
    )
}

export default ButtonClick;