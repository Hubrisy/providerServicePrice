function MainInfo(props:any){
    return (
        <div className='main__info-container'>
                <div className='main__info-block'>
                    <div className="main__info-item">
                        <h5>backblaze</h5>
                    </div>
                    <div className="main__info-item">
                        <h5>bunny</h5>
                        <div className='info__switch-storage'>
                            <div>
                                <span className='info__font'>HDD</span>
                                <span><input type="radio" value='HDD' checked={props.value === 'HDD'} onChange={props.radioValue} /></span>
                            </div>
                            <div>
                                <span className='info__font'>SSD</span>
                                <span><input type="radio" value='SSD' checked={props.value === 'SSD'} onChange={props.radioValue}/></span>
                            </div>
                        </div>
                    </div>
                    <div className="main__info-item">
                        <h5>scaleway</h5>
                        <div className='info__switch-storage'>
                            <div>
                                <span className='info__font'>Multi</span>
                                <span><input type="radio" value='Multi' checked={props.value === 'Multi'} onChange={props.radioValue}/></span>
                            </div>
                            <div>
                                <span className='info__font'>Single</span>
                                <span><input type="radio" value='Single' checked={props.value === 'Single'} onChange={props.radioValue}/></span>
                            </div>
                        </div>
                    </div>
                    <div className="main__info-item">
                        <h5>vultr</h5>
                    </div>
                </div>
                <div className='main__graphics-block'>
                    <div className='main__border'></div>
                    <div className='main__graphics-ranges'>
                        <div className='graphic__item one' style={{width: `${props.widthOne*2}px`}}>${props.resultOne}</div>
                        <div className='graphic__item two' style={{width: `${props.widthTwo*2}px`}}>${props.resultTwo}</div>
                        <div className='graphic__item three' style={{width: `${props.widthThree*2}px`}}>${props.resultThree}</div>
                        <div className='graphic__item four' style={{width: `${props.widthFour*2}px`}}>${props.resultFour}</div>
                    </div>
                </div>
            </div>
    )
}

export default MainInfo;