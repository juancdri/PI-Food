import styled from 'styled-components';


export const StyledDiv = styled.div`
border:1px solid white;
  height:550px;
  width:75%;
  margin: 150px auto;
  box-shadow: 0 6rem 6rem 0 rgba(0, 0, 0, 0.6);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  .container{
    margin-top:20px;
    form{
      width:50%;
      margin:auto;
      display:flex;
      flex-direction:column;
      .form--dietsadd{
        margin:5px 0 0 0;
        display:flex;
        .form--li{
          margin-right:30px;
          list-style:none;
          font-weight:bold;
        }
      }
      label{
        margin-bottom:4px;
        font-weight:bold;
        margin-top:12px;
      }
      input{
        outline:none;
        height:30px;
      }
      .btn-submit{
        width:50%;
        margin:auto;
        margin-top:10px;
        padding:10px;
        border-radius:7px;
        outline:none;
        background-color:black;
        color:white;
        :hover{
          background-color:#1f0505;
        }
      }
      .btn{
        display:block;
        width:75px;
        .btn-back{
          text-decoration:none;
          width:100%;
          button{
            background-color:black;
            color:white;
            border-radius:3px;
            padding:2px;
            width:75px;
            :hover{
              background-color: #1f0505;
            }
          }
        }
      }
    }
  }
.danger {
  border: red 1px solid;
}
`