$urls = @{
    "home.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzUyMzI2ZGQwM2I4MzQ2ZGJhNDMyODU0NDRiMTM5ZmU0EgsSBxCfouCFyQgYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjQyNTMwMDgzNzkzNjkwNzg5&filename=&opi=89354086"
    "experience.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzU5NmM4NzgzZmIwYzRmZmVhMzNlNzc3ODViOTE2Mjc1EgsSBxCfouCFyQgYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjQyNTMwMDgzNzkzNjkwNzg5&filename=&opi=89354086"
    "projects.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzg5YjU4YTdmM2NhZDRlZTM5YjQ0OGVmMTRmYzdhODAwEgsSBxCfouCFyQgYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjQyNTMwMDgzNzkzNjkwNzg5&filename=&opi=89354086"
    "contact.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzE0MWU5OWMwN2UyNzQ2Yzg4NTA5MDkzZTQ0ZjUzYzYyEgsSBxCfouCFyQgYAZIBIwoKcHJvamVjdF9pZBIVQhMxNjQyNTMwMDgzNzkzNjkwNzg5&filename=&opi=89354086"
}

foreach ($key in $urls.Keys) {
    Try {
        Invoke-WebRequest -Uri $urls[$key] -OutFile $key
        Write-Host "Downloaded $key"
    } Catch {
        Write-Host "Error downloading $key : $_"
    }
}
