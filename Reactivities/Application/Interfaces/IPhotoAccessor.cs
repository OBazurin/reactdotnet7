using Application.Photos;
using Microsoft.AspNetCore.Http;
namespace Application.Interfaces;
public interface IPhotoAccessor{
    Task<PhotoUploadResults> AddPhoto(IFormFile file);
    Task<string> DeletePhoto(string publicId);
}