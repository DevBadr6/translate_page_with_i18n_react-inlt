import { getMessage } from "../../../getMessages";


const about = async ({params}) => {

  const lang = await getMessage(params.lang);

  console.log(params, "params for about");
  
  return (
    <div>
      {lang.about.text}
    </div>
  )
}

export default about