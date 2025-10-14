package stream

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

func Heartbeat(c *gin.Context) {
	ctx := c.Request.Context()

	pingInterval := 1 * time.Second // default 15 seconds
	ticker := time.NewTicker(pingInterval)
	go func() {
		defer ticker.Stop()
		for {
			select {
			case <-ctx.Done():
				return
			case <-ticker.C:
				// SSE ping message
				ts := time.Now().Unix() // timestamp in seconds
				msg := fmt.Sprintf(": ping - %d\n\n", ts)
				_, _ = c.Writer.Write([]byte(msg))
				c.Writer.Flush()
			}
		}
	}()
}
