import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BsThreeDotsVertical } from "react-icons/bs"
import { coins } from "../static/coins"
import Coin from "./Coin"
import LineChart from "./LineChart"
import {ethers} from 'ethers'
import { ThirdwebSDK } from "@3rdweb/sdk"


const 

const Portfolio = () => {
  const [sanityTokens, setSanityTokens] = useState([])
  useEffect(() => {
    const getCoins = async () => {
      try {
        const coins = await fetch(
          "https://mksajuwu.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
        )
        const tempSanityTokens = await coins.json()
        console.log(tempSanityTokens)
        setSanityTokens(tempSanityTokens.result)
      } catch (error) {
        console.log(error)
      }
    }
    return getCoins()
  }, [])
  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio Balance</BalanceTitle>
              <BalanceValue>{"$"}49,000</BalanceValue>
            </Balance>
          </div>
          <LineChart />
        </Chart>

        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map((coin) => (
                <div>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.table`
  width: 100%;
`

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2 rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`
const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`
