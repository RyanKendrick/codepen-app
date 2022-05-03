import React, { FunctionComponent } from 'react'
import Image from 'next/image'



const Section1Html: FunctionComponent = () => {
  return (
    <>
        <div className='code-example'>
            <div className='code-example-header'>
                <div className='settings-label-container'>
                    <div className='img-wrapper'>
                        <Image
                            src={`/settings.svg`}
                            alt='settings'
                            width={17}
                            height={17}
                            className='example-icon'
                            />
                    </div>
                    <span>HTML</span>
                </div>
                <Image
                    src={`/down-arrow.svg`}
                    alt='settings'
                    width={20}
                    height={20}
                    className='example-icon'
                    />
            </div>
        </div>
    </>
  )
}

export default Section1Html
