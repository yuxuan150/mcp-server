import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import z from "zod"
const server = new McpServer({
    name: "test",
    version: "1.0.0",
    capabilities:{
        resourse:{},
        tools:{},
        promots:{},
    }
})
server.tool(
    "create-user",
    "Create a new user in the database",
    {
      name: z.string(),
      email: z.string(),
      address: z.string(),
      phone: z.string(),
    },
    {
      title: "Create User",
      readOnlyHint: false,
      destructiveHint: false,
      idempotentHint: false,
      openWorldHint: true,
    },
    async params => {
      try {
        const id = await createUser(params)
  
        return {
          content: [{ type: "text", text: `User ${id} created successfully` }],
        }
      } catch {
        return {
          content: [{ type: "text", text: "Failed to save user" }],
        }
      }
    }
  )
  transport)
}