import { Color } from "../color/color";
import "./colorRenderer.scss";

export const ColorRenderer = () => {

    const colors = [
        {
            colorName: 'red',
            hexCode: '#ff0000'
        },
        {
            colorName: 'blue',
            hexCode: '#2980B9'
        },
    ];
    return  (
        <div className="color-renderer">
        {colors && colors.map((color) => (
            <Color key={color.hexCode} colorName={color.colorName} hexCode={color.hexCode}/>
        ))}
        </div>
    )

}