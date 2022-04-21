
import React, {useState, useRef} from 'react'
import useClickOutside from '../../../hooks/useClickOutside'
export default function SettingDropDown({onSelect}) {
    const [isSectionOpen, setIsSectionOpen] = useState(false);
    const listElement = useRef();
    const selectButton = useRef();

    const handleBlogClick = () => {
        setIsSectionOpen(!isSectionOpen);
      };
    
      const hideBlogDropdown = () => {
        setIsSectionOpen(false);
      };
    
      const handleOptionClick = () => {
        hideBlogDropdown();
        if (onSelect) {
          onSelect();
        }
      };

      
    return (
    <div>SettingDropDown</div>
  )
}
