import Styles from '../../layouts/build.module.css'

interface IScratchForm {
    formType: string;
    formDescription: string;
    onClick: () => void;
}

export default function ScratchForm(props: IScratchForm) {
    return (
        <div onClick={props.onClick}>    
            <div className="bg-white shadow sm:rounded-lg  m-4">
                <div className="h-64 w-64">
                    {/* rightside circle OLD REFERENCE*/}
                    {/* <span className={`${Styles.dot}`} /> */}
                    <span className='dot'></span>
                </div>
            </div>
            <h3 className="text-lg leading-6 font-medium text-zinc-900 my-div" onClick={props.onClick}>{props.formType} form</h3>
            <div className="mt-2 max-w-xl text-sm text-zinc-500">
                <p>{props.formDescription}</p>
            </div>
         </div>
    )
}