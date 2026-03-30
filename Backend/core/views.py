from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Ride, User
from .serializers import RideSerializer

# GET available rides
@api_view(['GET'])
def available_rides(request):
    try:
        rides = Ride.objects.filter(status='requested')
        serializer = RideSerializer(rides, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


# ACCEPT ride
@api_view(['POST'])
def accept_ride(request):
    try:
        if 'ride_id' not in request.data or 'driver_id' not in request.data:
            return Response(
                {"error": "ride_id and driver_id are required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        ride = get_object_or_404(Ride, id=request.data['ride_id'])
        driver = get_object_or_404(User, id=request.data['driver_id'])
        
        ride.status = 'accepted'
        ride.driver = driver
        ride.save()
        return Response({"message": "Ride accepted"})
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


# START ride
@api_view(['POST'])
def start_ride(request):
    try:
        if 'ride_id' not in request.data:
            return Response(
                {"error": "ride_id is required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        ride = get_object_or_404(Ride, id=request.data['ride_id'])
        ride.status = 'started'
        ride.save()
        return Response({"message": "Ride started"})
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


# END ride
@api_view(['POST'])
def end_ride(request):
    try:
        if 'ride_id' not in request.data:
            return Response(
                {"error": "ride_id is required"},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        ride = get_object_or_404(Ride, id=request.data['ride_id'])
        ride.status = 'completed'
        ride.save()
        return Response({"message": "Ride completed"})
    except Exception as e:
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )


