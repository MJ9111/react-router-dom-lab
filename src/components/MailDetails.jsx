import { useParams } from 'react-router-dom'

const MailDetails = props => {
  const { mailboxId } = useParams()

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  )

  if (!selectedBox) {
    return null;
  }

  const { singleMail } = selectedBox;

  return (
    <>
      <h2>{singleMail.name}</h2>
      <p>subject: {singleMail.subject}</p>
      <p>message: {singleMail.message}</p>
    </>
  )
}

export default MailDetails