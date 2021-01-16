import React from 'react';


import * as Icons from '../components/icons'
import Button from "../components/button";
export default {
    title: 'Navigation Bar Icons',
};

export const Icon = () => (
    <div className="icons">
        <Icons.Apps />
        <Icons.HomePage />
        <Icons.Layer />
        <Icons.Messages />
        <Icons.Settings />
        <Icons.Logout />
    </div>
)
export const ActiveIcon = () => (
    <div className="icons">
        <Icons.Apps style={{color:'#4255d4'}}/>
        <Icons.HomePage style={{color:'#4255d4'}}/>
        <Icons.Layer style={{color:'#4255d4'}}/>
        <Icons.Messages style={{color:'#4255d4'}}/>
        <Icons.Settings style={{color:'#4255d4'}}/>
        <Icons.Logout style={{color:'#4255d4'}}/>
    </div>
)

export const IconButtons = () => <div className='icons' >
    <Button startIcon={<Icons.Apps/>}/>
    <Button startIcon={<Icons.HomePage/>} />
    <Button startIcon={<Icons.Layer/>} />
    <Button startIcon={<Icons.Messages/>} />
    <Button startIcon={<Icons.Logout/>} />

</div>;
