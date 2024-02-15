
import './color.scss';

export const Color = ({colorName, hexCode}) => {
  return  (
    <div className="color-box" style={{backgroundColor: hexCode}}>
        {colorName}
    </div>
  );

};
