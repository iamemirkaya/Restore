using System;
using System.Security.Cryptography.X509Certificates;
using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {

        public required DbSet<Product> Products { get; set; }

    }
}