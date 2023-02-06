function InputContainer(props:any){
    return (
        <div className='input__container'>
            <div className='input__block'>
                    <div>
                        <h3>Storage : {props.storage}</h3>
                        <span></span>
                    </div>
                    <input type="range" value={props.storage} onChange={props.changeStorage}  min={0} max={1000} />
                    <div className='input__range-block'>
                        <span>0</span>
                        <span>1000</span>
                    </div>
                </div>
                <div className='input__block'>
                    <div>
                        <h3>Transfer : {props.transfer}</h3>
                        <span></span>
                    </div>
                    <input type="range" value={props.transfer} onChange={props.changeTransfer} min={0} max={1000} />
                    <div className='input__range-block'>
                        <span>0</span>
                        <span>1000</span>
                    </div>
                </div>
        </div>
    )
}

export default InputContainer;