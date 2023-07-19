import React from 'react'
import { Skeleton } from "@mui/material";


const LoadingItem = () => {
  return (
    <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 19,
          padding: 10,
        }}
      >
        <Skeleton variant="circular" width={220} height={220} />

        <div style={{ margin: 10 }}>
          <Skeleton variant="rounded" width={220} height={30} />
        </div>

        <div style={{ marin: 10 }}>
          <Skeleton variant="rounded" width={220} height={80} />
        </div>
        <div
          style={{
            width: "90%",
            margin: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Skeleton variant="rounded" width={70} height={30} />
          <Skeleton variant="rounded" width={100} height={30} />
        </div>
      </div>
  )
}

export default LoadingItem