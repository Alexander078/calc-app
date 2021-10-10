import React, {FC} from 'react';

type Prop = {
      value: string
}

const Result: FC<Prop> = ({ value }) => (
 //const { value } = props;
 //debugger  
    <div className="result">     
          { value }
    </div>
)  

Result.defaultProps = {
      value: "0"
}

export default Result;