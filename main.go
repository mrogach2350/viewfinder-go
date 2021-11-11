package main

import (
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./client/dist", true)))

	api := router.Group("/api")
	api.GET("/weapons", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "ok"})
	})

	router.Run(":8080")
}
