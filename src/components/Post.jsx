import React from 'react'

const Post = ({ id, subject,description }) => (
  <li>
    { `${id} -- ${subject}  -- ${description} `  }
  </li>
)

export default Post