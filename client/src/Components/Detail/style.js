import styled from 'styled-components';


export const StyledDiv = styled.div`
  width: 75%;
  margin: 20px auto;
  margin-top: 0px !important;
  padding-top: 0px !important;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);

  /* justify-content: stretch;
  text-justify: auto; */

  .card-title {
    text-align:center;
    font-size:24px;
  }

  .detail-img{
    width:100%;
    text-align:center;
    .image{
      width: 550px;
      height: 300px;
    }
  }

  .summary{
    margin-bottom:15px;
    h3{
      font-size:18px;
      margin-left:5px;
    }
    p{
      margin:0 5px;
    }
  }

  .container--dates{
    width:100%;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
    display:grid;
    grid-template-columns:1fr 1fr;
    margin-bottom:10px;
    .container--diets{
      margin-left:5px;
      ul{
          display:flex;
        li{
          margin:0 30px 0 0 ;
          font-weight:bold;
        }
      }
    }
    .container-category{
      ul{
          display:flex;
          margin:auto;
        li{
          margin:0 30px 0 0 ;
          font-weight:bold;
        }
      }
    }
    .container-healthS,
    .container-generalScore{
      margin-left:5px;
      text-align:center;
    }
    .container-stepbystep{
        margin:0 0 10px 5px;
      li{
        list-style:none;
        
      }
    }

  }
    .btn{
        display:block;
        width:75px;
        margin:auto;
        margin-bottom:10px;
        .btn-back{
          text-decoration:none;
          width:100%;
          button{
            background-color:black;
            color:white;
            border-radius:3px;
            width:75px;
            padding:2px;            
          }
        }
      }

  `