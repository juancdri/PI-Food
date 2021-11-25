import styled from 'styled-components';


export const StyledDiv = styled.div`
  width:50%;
  margin:auto;
  margin-top:20px;
  margin-bottom:30px;
  .paginate{
    .paginate-ul{
      display:flex;
      justify-content:center;
      .paginate-li{
        border:1px solid black;
        margin:20px;
        list-style:none;
        text-align:center;
        width:30px;
        background-color: #f2f2f0;
        backdrop-filter: blur(10px) saturate(100%) contrast(65%) brightness(130%);
        border-radius:5px;
        a{
          font-size: 10pt;
          font-weight: bold;
          width:30px;
          padding: 1px 7px;
          color: #666666;
          text-decoration: none;
        }
      }
    }
  }
  .container{
    display: grid;
    grid-template-columns:1fr;
    grid-gap:2rem;
    .card{
      box-shadow: 0 6rem 6rem 0 rgba(0, 0, 0, 0.2);
      background-color: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px) saturate(100%) contrast(65%) brightness(130%);
      border-radius:6px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .card-img{
          margin:auto;
          width:15.5rem;
          height:12rem;
          margin-top:0px;
        .image{
          width:100%;
          height:100%;
          border-radius:6px;
        }
      }
      .card-select{
        width:40rem;
        height:12rem;
        margin:auto;
        .card-link{
          text-decoration:none;
          color:black;
          .card-title{
            font-size:20px;
            padding:0;
            text-align:center;
            margin:0;
          }
        }
        .card-ul{
          .card-list{
            display:grid;
            grid-template-columns:1fr 1fr;
            .card-li{
              list-style:none;
              font-weight:bold;
              font-size:16px;
              color:black;
            }
          }
        }
      }
    }
  }
  `