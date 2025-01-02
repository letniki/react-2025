import {FC} from "react";

type MyComponentPropType={
    text:string;
}

const MyComponent :FC<MyComponentPropType> = ({text}) => {
    return <>{text}</>
}
export default MyComponent;