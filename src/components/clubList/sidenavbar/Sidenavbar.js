import './Sidenavbar.css'
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


import './Sidenavbar.css'

const Sidenavbar = ({clubCategories}) => {
    return (
        <div className='sidenavbar'>
            <h3>This is side nav bar</h3>
            {clubCategories.map((category) => (
                <p key={category.id}>{category.category}</p>
            ))}
        </div>
    )
}

export default Sidenavbar
